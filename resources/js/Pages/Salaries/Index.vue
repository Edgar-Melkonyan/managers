<template>
  <v-data-table
    :headers="headers"
    :items="salaries"
    item-key="id"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Salaries</v-toolbar-title>

        <v-divider class="mx-4" inset vertical/>

        <v-btn color="primary" href="/salaries/report" text>
          Go to Report
        </v-btn>

        <v-spacer/>

        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              class="mb-2"
              dark
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>
          <validation-observer ref="form" tag="div" v-slot="{ invalid }">
            <v-card>
              <v-card-title>
                <span class="headline">new salary item</span>
              </v-card-title>

              <v-card-text>
                <validation-provider name="name" rules="required|max:255" v-slot="{ errors }">
                  <v-text-field
                    v-model="editable.item.employee_name"
                    :error-messages="errors"
                    label="Employee name"
                    name="employee_name"
                    autofocus
                    clearable
                  />
                </validation-provider>

                <validation-provider name="amount" :rules="{required: true, regex:/^[0-9]{1,10}(\.\d{1,2})?$/}" v-slot="{ errors }">
                  <v-text-field
                    v-model.number="editable.item.amount"
                    :error-messages="errors"
                    label="Amount"
                    type="number"
                    step="0.01"
                    max="1000000000.00"
                    min="0.00"
                    clearable
                  />
                </validation-provider>

                <v-menu
                  v-model="menu"
                  :nudge-right="40"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  min-width="290px"
                  offset-y
                >
                  <template v-slot:activator="{ on, attrs }">
                    <validation-provider name="date" rules="required" v-slot="{ errors }">
                      <v-text-field
                        v-model="editable.item.date"
                        v-bind="attrs"
                        v-on="on"
                        prepend-icon="mdi-calendar"
                        label="Date"
                        readonly
                      />
                    </validation-provider>
                  </template>

                  <v-date-picker
                    v-model="editable.item.date"
                    @input="menu = false"
                  />
                </v-menu>
              </v-card-text>

              <v-card-actions>
                <v-spacer/>

                <v-btn color="blue darken-1" text @click="close('dialog')">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" :disabled="invalid" text @click="save">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </validation-observer>
        </v-dialog>

        <v-dialog v-model="confirm" max-width="450px">
          <v-card outlined>
            <v-card-title class="title">
              Are you sure you want to delete this item?
            </v-card-title>

            <v-card-actions>
              <v-spacer/>

              <v-btn text @click="close('confirm')">Cancel</v-btn>
              <v-btn color="error" @click="deleteItemConfirm">OK</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import App from "@/Layouts/App";
import { salaryApi } from "../../Api/salary";
import { ValidationObserver, ValidationProvider } from "vee-validate";

const salary = {
  employee_name: '',
  amount: null,
  date: null
};
const headers = [
  { text: 'ID', value: 'id' },
  {
    text: 'Employee name',
    align: 'start',
    sortable: false,
    value: 'employee_name',
  },
  { text: 'Amount', value: 'amount', align: 'end' },
  { text: 'Date', value: 'date' },
  { text: 'Actions', value: 'actions', sortable: false },
];

const setServerErrors = err => {
  if (err.response && err.response.hasOwnProperty('status') && err.response.status === 422) {
    this.$refs.form.setErrors(err.response.data.errors);
  }
}

export default {
  layout: App,
  name: "Salaries",
  props: {
    salaries: {
      required: true,
      type: Array
    }
  },
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    editable: {
      index: -1,
      item: { ...salary }
    },
    headers,
    confirm: false,
    dialog: false,
    menu: false
  }),
  methods: {
    editItem(item) {
      this.editable.index = this.salaries.indexOf(item)
      this.editable.item = { ...item }
      this.dialog = true
    },

    deleteItem(item) {
      this.editable.index = this.salaries.indexOf(item)
      this.editable.item = { ...item }
      this.confirm = true
    },

    deleteItemConfirm() {
      salaryApi.delete(`/salaries/${this.editable.item.id}`)
        .then(() => this.salaries.splice(this.editable.index, 1))
        .catch(err => console.log(err))
        .finally(() => this.close('confirm'))
    },

    /**
     * Close & cancel
     *
     * @param {String} key - component dialog property name
     */
    close(key) {
      this[key] = false
      this.$nextTick(() => {
        this.editable.item = { ...salary }
        this.editable.index = -1
      })
    },

    save() {
      this.loading = 'primary';
      this.editable.index > -1
        ? salaryApi
          .put(`/salaries/${this.editable.item.id}`, this.editable.item)
          .then(res => {
            console.log(res);
            this.salaries.splice(this.editable.index, 1, {...res.data.salary})
          })
          .catch(err => setServerErrors)
          .finally(() => this.close('dialog'))
        : salaryApi
          .post('/salaries', this.editable.item)
          .then(res => this.salaries.unshift(res.data.salary))
          .catch(setServerErrors)
          .finally(() => this.close('dialog'));
    },
  },
  created() {
    console.log(this.$route);
  }
}
</script>

<style scoped>

</style>

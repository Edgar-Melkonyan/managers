<?php

namespace Database\Seeders;

use App\Models\Salary;
use Illuminate\Database\Seeder;

class SalariesTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    Salary::factory()->times(500)->create();
  }
}

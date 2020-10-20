<?php

namespace Database\Factories;

use App\Models\Salary;
use Illuminate\Database\Eloquent\Factories\Factory;

class SalaryFactory extends Factory
{
  /**
   * The name of the factory's corresponding model.
   *
   * @var string
   */
  protected $model = Salary::class;

  /**
   * Define the model's default state.
   *
   * @return array
   */
  public function definition()
  {
    return [
      'employee_name' => $this->faker->name,
      'amount' => $this->faker->randomFloat(null, 1, 99999.99), // 9999999999.99
      'date' => $this->faker->date()
    ];
  }
}

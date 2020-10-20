<?php

namespace App\Http\Requests;

use App\Models\Salary;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Foundation\Http\FormRequest;

class CreateSalaryRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize()
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules()
  {
    return [
      'employee_name' => 'required|string|max:255',
      'amount' => 'required|numeric',
      'date' => 'required|date'
    ];
  }

  /**
   * Creates Salary in storage
   *
   * @return JsonResponse
   */
  public function createSalary()
  {
    $salary = Salary::create($this->all());

    return response()->json([
      'salary' => $salary,
      'message' => 'Salary created.'
    ], Response::HTTP_CREATED);
  }
}

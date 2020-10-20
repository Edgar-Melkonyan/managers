<?php

namespace App\Http\Requests;

use App\Models\Salary;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class UpdateSalaryRequest extends FormRequest
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
   * Updates salary in store
   *
   * @param Salary $salary
   * @return JsonResponse
   */
  public function updateSalary(Salary $salary)
  {
    $salary->update($this->all());

    return response()->json([
      'salary' => $salary->fresh(),
      'message' => 'Salary updated'
    ], Response::HTTP_OK);
  }
}

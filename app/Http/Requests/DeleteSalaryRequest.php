<?php

namespace App\Http\Requests;

use App\Models\Salary;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Foundation\Http\FormRequest;

class DeleteSalaryRequest extends FormRequest
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
      //
    ];
  }

  /**
   * Deletes salary from store
   *
   * @param Salary $salary
   * @return JsonResponse
   */
  public function deleteSalary(Salary $salary)
  {
    $message = 'Salary deleted.';

    try {
      $salary->delete();
    } catch (\Exception $e) {
      $message = $e->getMessage();
    }

    return response()->json(compact('message'), Response::HTTP_OK);
  }
}

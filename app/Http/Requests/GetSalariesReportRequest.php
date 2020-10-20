<?php

namespace App\Http\Requests;

use App\Models\Salary;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Http\FormRequest;

class GetSalariesReportRequest extends FormRequest
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
   * Get Average Salary by months for current year
   *
   * @return Collection
   */
  public function getReport()
  {
    return Salary::select([
      DB::raw('AVG(salaries.amount) as avg_amount'),
      DB::raw('MONTH(date) month'),
      DB::raw('YEAR(date) year')
    ])
      ->whereYear('date', now()->year)
      ->groupBy('month', 'year')
      ->orderBy('month', 'desc')
      ->get();
  }
}

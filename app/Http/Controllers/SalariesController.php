<?php

namespace App\Http\Controllers;

use App\Http\Requests\GetSalariesReportRequest;
use App\Http\Requests\CreateSalaryRequest;
use App\Http\Requests\DeleteSalaryRequest;
use App\Http\Requests\UpdateSalaryRequest;
use App\Models\Salary;
use Illuminate\Http\JsonResponse;
use Inertia\Response;
use Inertia\Inertia;

class SalariesController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return Response
   */
  public function index()
  {
    return Inertia::render('Salaries/Index', [
      'salaries' => Salary::orderBy('id', 'desc')->get(),
    ]);
  }

  /**
   * Get Average Salary by months for current year
   *
   * @param GetSalariesReportRequest $request
   * @return Response
   */
  public function report(GetSalariesReportRequest $request)
  {
    return Inertia::render('Salaries/Report', [
      'report' => $request->getReport()
    ]);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @param CreateSalaryRequest $request
   * @return JsonResponse
   */
  public function store(CreateSalaryRequest $request)
  {
    return $request->createSalary();
  }

  /**
   * Update the specified resource in storage.
   *
   * @param UpdateSalaryRequest $request
   * @param Salary $salary
   * @return JsonResponse
   */
  public function update(UpdateSalaryRequest $request, Salary $salary)
  {
    return $request->updateSalary($salary);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param DeleteSalaryRequest $request
   * @param Salary $salary
   * @return JsonResponse
   */
  public function destroy(DeleteSalaryRequest $request, Salary $salary)
  {
    return $request->deleteSalary($salary);
  }
}

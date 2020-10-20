<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;

/**
 * @property int id
 * @property string employee_name
 * @property float amount
 * @property Carbon date
 * @method static Salary find(int $id)
 * @method static Salary create(array $attrs)
 * @method static Builder select(array|mixed $columns = ['*'])
 */
class Salary extends Model
{
  use HasFactory;

  protected $casts = [
//    'date' => 'date'
    'amount' => 'decimal:2'
  ];

  protected $fillable = ['employee_name', 'amount', 'date'];
}

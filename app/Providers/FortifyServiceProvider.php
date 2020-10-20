<?php

namespace App\Providers;

use App\Actions\Fortify\UpdateUserProfileInformation;
use App\Actions\Fortify\UpdateUserPassword;
use App\Actions\Fortify\ResetUserPassword;
use App\Actions\Fortify\CreateNewUser;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Laravel\Fortify\Fortify;
use stdClass;

class FortifyServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   *
   * @return void
   */
  public function register()
  {
    //
  }

  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public function boot()
  {
    Fortify::loginView(function () {
      return inertia('Auth/Login', [
        'inputs' => session()->hasOldInput() ? session()->getOldInput() : new stdClass(),
        'errors' => session()->get('errors') ? session()->get('errors')->messages() :  new stdClass()
      ]);
    });

    Fortify::registerView(function () {
      return Inertia::render('Auth/Register', [
        'inputs' => session()->hasOldInput() ? session()->getOldInput() : new stdClass(),
        'errors' => session()->get('errors') ? session()->get('errors')->messages() :  new stdClass()
      ]);
    });

    Fortify::createUsersUsing(CreateNewUser::class);
    Fortify::updateUserProfileInformationUsing(UpdateUserProfileInformation::class);
    Fortify::updateUserPasswordsUsing(UpdateUserPassword::class);
    Fortify::resetUserPasswordsUsing(ResetUserPassword::class);
  }
}

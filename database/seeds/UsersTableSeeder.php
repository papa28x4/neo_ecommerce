<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $user = new User;
        // $user->name = "Admin";
        // $user->email = "admin@devtest.com";
        // $user->password = bcrypt('secret');
        // $user->is_admin = true;
        // $user->save();
        $user = new User;
        $user->name = "Paul Ince";
        $user->email = "paulo@devtest.com";
        $user->password = bcrypt('secret');
        $user->is_admin = false;
        $user->save();
        User::create([
            'name' => "Admin",
            'email' => "admin@devtest.com",
            'password' => bcrypt('secret'),
            'is_admin' => true
        ]);

    }
}

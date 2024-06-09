<?php

namespace Database\Seeders;

use App\Http\Controllers\LocationController;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->command->question("Starting to seed Location table");
        $controller = new LocationController();
        $result = $controller->store();
        $this->command->info($result);
    }
}

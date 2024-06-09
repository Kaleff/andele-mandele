<?php

namespace Database\Seeders;

use App\Http\Controllers\CharacterController;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CharacterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->command->question("Starting to seed Character table");
        $controller = new CharacterController();
        $result = $controller->store();
        $this->command->info($result);
    }
}

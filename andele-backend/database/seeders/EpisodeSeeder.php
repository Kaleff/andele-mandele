<?php

namespace Database\Seeders;

use App\Http\Controllers\EpisodeController;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EpisodeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->command->question("Starting to seed Episode table");
        $controller = new EpisodeController();
        $result = $controller->store();
        $this->command->info($result);
    }
}

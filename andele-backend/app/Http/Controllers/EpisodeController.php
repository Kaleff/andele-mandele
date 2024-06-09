<?php

namespace App\Http\Controllers;

use App\Models\Episode;
use App\Traits\CallApiTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EpisodeController extends Controller
{
    use CallApiTrait;

    public function store(): String 
    {
        $episodes = $this->callApi('episode');
        foreach($episodes as $episode) {
            Episode::create([
                    'name' => $episode['name'],
                    'air_date' => $episode['air_date'],
                    'episode' => $episode['episode']
                ]
            );
        }
        return 'Successfully seeded the Episodes table';
    }
}

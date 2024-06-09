<?php

namespace App\Http\Controllers;

use App\Models\Episode;
use App\Traits\CallApiTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EpisodeController extends Controller
{
    use CallApiTrait;

    public function index(Int $page): JsonResponse
    {
        $episodes = Episode::skip(10 * ($page - 1))->take(10)->get();
        return response()->json($episodes);
    }

    public function show(Int $id): JsonResponse
    {
        $episode = Episode::find($id);
        $characters = $episode->characters()->get();

        return response()->json(['episode' => $episode, 'characters' => $characters]);
    }

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

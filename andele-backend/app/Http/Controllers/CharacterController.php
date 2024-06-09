<?php

namespace App\Http\Controllers;

use App\Models\Character;
use App\Traits\CallApiTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CharacterController extends Controller
{
    use CallApiTrait;

    public function Store(): String
    {
        $characters = $this->callApi('character');
        foreach ($characters as $character) {
            $created_character = Character::create([
                'name' => $character['name'],
                'status' => $character['status'],
                'species' => $character['species'],
                'type' => $character['type'] == ""
                    ? null
                    : $character['type'],
                'gender' => $character['gender'],
                'image' => $character['image'],
                'origin_id' => $character['origin']['url'] == ""
                    ? null
                    : $this->getId($character['origin']['url']),
                'location_id' => $character['location']['url'] == ""
                    ? null 
                    : $this->getId($character['location']['url']),
            ]);
            // Populate pivot table for Many to Many relationship with characters and episodes
            $episodes = [];
            // Collect ids of episodes the character was starred in
            foreach($character['episode'] as $episode) {
                $episodes[] = $this->getId($episode);
            }
            $created_character->episodes()->attach($episodes);
        }
        return 'Successfully seeded the Characters table';
    }

    /**
     * Extract ids from the urls, not the best approach overall
     * But the best possible to retain the structure, foreign keys and data flow and connectivity
     */
    private function getId(String $url): Int
    {
        return (int) substr($url, strrpos($url, '/') + 1);
    }
}

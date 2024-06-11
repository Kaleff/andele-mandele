<?php

namespace App\Http\Controllers;

use App\Models\Location;
use App\Traits\CallApiTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    use CallApiTrait;

    public function index(Int $page): JsonResponse
    {
        $locations = Location::skip(10 * ($page - 1))->take(10)->get();
        return response()->json($locations);
    }

    public function store(): String
    {
        $locations = $this->callApi('location');
        foreach($locations as $location) {
            Location::create([
                'name' => $location['name'],
                'type' => $location['type'],
                'dimension' => $location['dimension']
            ]);
        }
        return 'Successfully seeded the location table';
    }
}

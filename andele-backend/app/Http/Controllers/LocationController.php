<?php

namespace App\Http\Controllers;

use App\Traits\CallApiTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    use CallApiTrait;

    public function store(): JsonResponse
    {
        $data = $this->callApi('location');
        dd($data);
    }
}

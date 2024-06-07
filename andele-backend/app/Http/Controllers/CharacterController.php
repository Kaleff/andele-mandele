<?php

namespace App\Http\Controllers;

use App\Traits\CallApiTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CharacterController extends Controller
{
    use CallApiTrait;

    public function Store(): JsonResponse 
    {
        $data = $this->callApi('character');
        dd($data);
    }
}

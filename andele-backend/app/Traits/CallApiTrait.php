<?php

namespace App\Traits;

trait CallApiTrait {
    public function callApi(String $parameter)
    {
        $reached_the_end = false;
        $page = 1;
        $api_url = "https://rickandmortyapi.com/api/$parameter?page=$page";
        $results = [];
        while(!$reached_the_end) {
            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_URL => $api_url,
                CURLOPT_HTTPHEADER => array("Content-Type: text/plain"),
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "GET"
            ));
            $response = curl_exec($curl);
            curl_close($curl);
            $data = json_decode($response, true);
            $results = array_merge($results, $data['results']);
            if($data['info']['next'] == null) {
                $reached_the_end = true;
            } else {
                $page++;
                $api_url = "https://rickandmortyapi.com/api/$parameter?page=$page";
            }
        }
        dd($results);
        
        // Convert the data to json and back from json to get assoc. array instead of object for provided data
        return $response;
    }
}
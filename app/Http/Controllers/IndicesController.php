<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Indice;
use Illuminate\Support\Facades\DB;
class IndicesController extends Controller
{
    public function index(){
        return Indice::all();
    }

    public function showIndices(Request $request, $direction){
        $xPosMin = $request->input('x');
        $yPosMin = $request->input('y');
        if($direction == 'left'){
            $xPos = $xPosMin - 10;
            $indices = DB::table('indices')
                ->select('nom_indice')
                ->where('y_indice', '=', $yPosMin)
                ->where('x_indice', '<', $xPosMin)
                ->where('x_indice', '>=', $xPos)
                ->distinct()
                ->orderBy('nom_indice', 'asc')
                ->get();
        } else if($direction == 'right'){
            $xPos = $xPosMin + 10;
            $indices = DB::table('indices')
                ->select('nom_indice')
                ->where('y_indice', '=', $yPosMin)
                ->where('x_indice', '>', $xPosMin)
                ->where('x_indice', '<=', $xPos)
                ->distinct()
                ->orderBy('nom_indice', 'asc')
                ->get();
        } else if($direction == 'up'){
            $yPos = $yPosMin - 10;
            $indices = DB::table('indices')
                ->select('nom_indice')
                ->where('x_indice', '=', $xPosMin)
                ->where('y_indice', '<', $yPosMin)
                ->where('y_indice', '>=', $yPos)
                ->distinct()
                ->orderBy('nom_indice', 'asc')
                ->get();
        } else {
            $yPos = $yPosMin + 10;
            $indices = DB::table('indices')
                ->select('nom_indice')
                ->where('x_indice', '=', $xPosMin)
                ->where('y_indice', '>', $yPosMin)
                ->where('y_indice', '<=', $yPos)
                ->distinct()
                ->orderBy('nom_indice', 'asc')
                ->get();
        }
        return response($indices, 200);
    }

    public function showPosIndice(Request $request, $indice){
        $xPos = $request->input('x');
        $yPos = $request->input('y');
        $direction = $request->input('direction');
        if($direction == 'left'){
            $pos = DB::table('indices')
                ->select('x_indice', 'y_indice')
                ->where('nom_indice', '=', $indice)
                ->where('y_indice', '=', $yPos)
                ->where('x_indice', '<', $xPos)
                ->orderBy('x_indice', 'desc')
                ->limit(1)
                ->get();
        }else if($direction == 'right'){
            $pos = DB::table('indices')
                ->select('x_indice', 'y_indice')
                ->where('nom_indice', '=', $indice)
                ->where('y_indice', '=', $yPos)
                ->where('x_indice', '>', $xPos)
                ->orderBy('x_indice', 'asc')
                ->limit(1)
                ->get();
        }else if($direction == 'up'){
            $pos = DB::table('indices')
                ->select('x_indice', 'y_indice')
                ->where('nom_indice', '=', $indice)
                ->where('x_indice', '=', $xPos)
                ->where('y_indice', '<', $yPos)
                ->orderBy('y_indice', 'desc')
                ->limit(1)
                ->get();
        }else {
            $pos = DB::table('indices')
                ->select('x_indice', 'y_indice')
                ->where('nom_indice', '=', $indice)
                ->where('x_indice', '=', $xPos)
                ->where('y_indice', '>', $yPos)
                ->orderBy('y_indice', 'asc')
                ->limit(1)
                ->get();
        }
        
        return response($pos, 200);
    }

    public function create(Request $request){
        $nom = $request->input('nom_indice');
        $region = $request->input('region_indice');
        $zone = $request->input('zone_indice');
        $xPos = $request->input('x_indice');
        $yPos = $request->input('y_indice');
        $exists = DB::table('indices')
            ->where('nom_indice', $nom)
            ->where('region_indice', $region)
            ->where('zone_indice', $zone)
            ->where('x_indice', $xPos)
            ->where('y_indice', $yPos)
            ->exists();
        if($exists != 1){
            try {
                DB::insert('
                INSERT INTO indices (nom_indice, region_indice, zone_indice, x_indice, y_indice)
                VALUES(?,?,?,?,?)', [$nom, $region, $zone, $xPos, $yPos]
                ); 
            } catch (Exception $e){
                return view('indice');
            }
        }
        return view('indice');
    }
}

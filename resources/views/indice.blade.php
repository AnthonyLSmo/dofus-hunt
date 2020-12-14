@extends('input_pos')

@section('contenu')
    {!! Form::open(['url' => 'indice']) !!}
        <div>    
            {!! Form::text('nom_indice', null, ['class' => 'input-indice input-indice-notpos', 'placeholder' => 'Nom de l\'indice']) !!}
        </div> 
        <div> 
            {!! Form::text('region_indice', null, ['class' => 'input-indice input-indice-notpos', 'placeholder' => 'Region de l\'indice']) !!}
        </div>
        <div>  
            {!! Form::text('zone_indice', null, ['class' => 'input-indice input-indice-notpos', 'placeholder' => 'Zone de l\'indice']) !!}
        </div>
        <div>
            {!! Form::text('x_indice', null, ['class' => 'input-indice input-indice-pos', 'placeholder' => 'X']) !!}
            {!! Form::text('y_indice', null, ['class' => 'input-indice input-indice-pos', 'placeholder' => 'Y']) !!}
        </div>
        <div>
            {!! Form::submit('ok', ['class' => 'button-hunt button-hunt-nselected button-validate-indice']) !!}
        </div>
    {!! Form::close() !!}
@endsection
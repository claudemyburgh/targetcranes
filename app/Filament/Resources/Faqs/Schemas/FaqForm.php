<?php

namespace App\Filament\Resources\Faqs\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class FaqForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('question')
                    ->label('Question')
                    ->required()
                    ->maxLength(255)
                    ->columnSpanFull(),
                Textarea::make('answer')
                    ->label('Answer')
                    ->required()
                    ->rows(6)
                    ->columnSpanFull(),
                TextInput::make('sort_order')
                    ->label('Sort Order')
                    ->required()
                    ->numeric()
                    ->default(0)
                    ->helperText('Lower numbers appear first. You can also reorder items directly in the table view.'),
                Toggle::make('is_published')
                    ->label('Published')
                    ->default(true),
            ]);
    }
}

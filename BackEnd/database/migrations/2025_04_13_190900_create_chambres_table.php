<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('chambres', function (Blueprint $table) {
            $table->id('id_chambre');
            $table->string('numero', 20)->unique();
            $table->enum('categorie', ['simple', 'double', 'suite']);
            $table->enum('statut', ['Disponible', 'Réservée', 'Occupée', 'En nettoyage', 'Hors service'])->default('Disponible');
            $table->text('description')->nullable();
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chambres');
    }
};

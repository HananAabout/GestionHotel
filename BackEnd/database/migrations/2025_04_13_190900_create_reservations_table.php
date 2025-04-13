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
        Schema::create('reservations', function (Blueprint $table) {
            $table->id('id_reservation');
            $table->date('date_arrivee');
            $table->date('date_depart');
            $table->timestamp('date_reservation')->useCurrent();
            
            $table->unsignedBigInteger('id_client');
            $table->unsignedBigInteger('id_chambre');
            $table->unsignedBigInteger('created_by')->nullable();
        
            $table->foreign('id_client')->references('id_client')->on('clients')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('id_chambre')->references('id_chambre')->on('chambres')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('created_by')->references('id_utilisateur')->on('utilisateurs')->onDelete('set null')->onUpdate('cascade');
        
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};

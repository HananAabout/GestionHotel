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
        Schema::create('paiements', function (Blueprint $table) {
            $table->id('id_paiement');
            $table->unsignedBigInteger('id_reservation');
            $table->decimal('montant', 10, 2);
            $table->enum('mode_paiement', ['Espèces', 'Carte bancaire', 'Virement']);
            $table->date('date_paiement');
            $table->unsignedBigInteger('created_by')->nullable();
        
            $table->foreign('id_reservation')->references('id_reservation')->on('reservations')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('created_by')->references('id_utilisateur')->on('utilisateurs')->onDelete('set null')->onUpdate('cascade');
        
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('paiements');
    }
};

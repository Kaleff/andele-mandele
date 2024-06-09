<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    private $tablename = 'character_episode';

    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create($this->tablename, function (Blueprint $table) {
            $table->id();
            $table->index('character_id');
            $table->index('episode_id');
            $table->foreignId('character_id')->references('id')->on('characters')->onDelete('cascade');
            $table->foreignId('episode_id')->references('id')->on('episodes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table($this->tablename, function(Blueprint $table) {
            $table->dropForeign($this->tablename . '_character_id_foreign');
            $table->dropIndex($this->tablename . '_character_id_index');
            $table->dropColumn('character_id');
            $table->dropForeign($this->tablename . '_episode_id_foreign');
            $table->dropIndex($this->tablename . '_episode_id_index');
            $table->dropColumn('episode_id');
        });
        Schema::dropIfExists($this->tablename);
    }
};

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    private $tablename = 'characters';
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create($this->tablename, function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
            $table->string('status');
            $table->string('species');
            $table->string('type')->nullable();
            $table->string('gender');
            $table->string('image');
            $table->index('origin_id');
            $table->index('location_id');

            $table->foreignId('origin_id')->nullable()->references('id')->on('locations');
            $table->foreignId('location_id')->nullable()->references('id')->on('locations');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table($this->tablename, function(Blueprint $table) {
            $table->dropForeign($this->tablename . '_origin_id_foreign');
            $table->dropIndex($this->tablename . '_origin_id_index');
            $table->dropColumn('origin_id');

            $table->dropForeign($this->tablename . '_location_id_foreign');
            $table->dropIndex($this->tablename . '_location_id_index');
            $table->dropColumn('location_id');
        });
        Schema::dropIfExists($this->tablename);
    }
};

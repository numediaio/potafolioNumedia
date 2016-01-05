class ArticulosController < ApplicationController
	before_action :encontrar_articulo, only: [:show, :edit, :update, :destroy]
	def index
		
	end

	def show
		
	end

	def new
		@articulo = Articulo.new
	end

	def create
		@articulo = Articulo.new articulo_params

		if @articulo.save
			redirect_to @articulo, notice: "YEAH Baby! El articulo fue salvado"
		else
			render 'new', notice: "Nop, no se pudo guardar por que: RAZONES"
		end
	end

	def edit
		
	end

	def update
		if @articulo.update articulo_params
			redirect_to @articulo, notice: "Se actualizo"
		else
			render 'edit', notice: "No se pudo actualizar :("
		end
	end

	def destroy
		@articulo.destroy
		redirect_to articulos_path
	end


	private

	def articulo_params
		params.require(:articulo).permit(:titulo, :cuerpo_texto)
	end

	def encontrar_articulo
		@articulo = Articulo.find(params[:id])
	end
end

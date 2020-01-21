Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create]
    resources :videos, only: [:index, :show] do
      collection do
        get 'search'
        get 'shows'
        get 'movies'
      end
    end
    resources :list_videos, only: [:index, :create, :destroy]

    resource :session, only: [:create, :destroy]
  end
end

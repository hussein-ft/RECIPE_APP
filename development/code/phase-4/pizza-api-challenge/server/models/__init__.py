from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask import Flask
from server.config import Config

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)  # Initialize Flask-Migrate

    # Register Blueprints
    from server.controllers.restaurant_controller import restaurant_bp
    from server.controllers.pizza_controller import pizza_bp
    from server.controllers.restaurant_pizza_controller import restaurant_pizza_bp

    app.register_blueprint(restaurant_bp, url_prefix='/restaurants')
    app.register_blueprint(pizza_bp, url_prefix='/pizzas')
    app.register_blueprint(restaurant_pizza_bp, url_prefix='/restaurant_pizzas')

    @app.route('/')
    def home():
        return {"message": "Welcome to the Pizza API!"}

    return app

# Import models after db initialization to avoid circular imports
from .restaurant import Restaurant
from .pizza import Pizza
from .restaurant_pizza import RestaurantPizza

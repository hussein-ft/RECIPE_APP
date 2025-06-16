from flask import Blueprint, request, jsonify
from server.models import db
from server.models.restaurant_pizza import RestaurantPizza

restaurant_pizza_bp = Blueprint('restaurant_pizza_bp', __name__)

@restaurant_pizza_bp.route('/', methods=['POST'])
def create_restaurant_pizza():
    data = request.get_json()

    try:
        new_link = RestaurantPizza(
            price=data['price'],
            pizza_id=data['pizza_id'],
            restaurant_id=data['restaurant_id']
        )
        db.session.add(new_link)
        db.session.commit()

        return jsonify({
            "id": new_link.id,
            "price": new_link.price,
            "pizza_id": new_link.pizza_id,
            "restaurant_id": new_link.restaurant_id
        }), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

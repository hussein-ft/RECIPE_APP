from server.app import app, db
from server.models.pizza import Pizza
from server.models.restaurant import Restaurant
from server.models.restaurant_pizza import RestaurantPizza

with app.app_context():
    print("🌱 Seeding data...")

    # Clear existing data
    RestaurantPizza.query.delete()
    Restaurant.query.delete()
    Pizza.query.delete()

    # Create pizzas
    pizza1 = Pizza(name="Margherita", ingredients="Dough, Tomato Sauce, Mozzarella")
    pizza2 = Pizza(name="Pepperoni", ingredients="Dough, Tomato Sauce, Mozzarella, Pepperoni")
    pizza3 = Pizza(name="Hawaiian", ingredients="Dough, Tomato Sauce, Ham, Pineapple")

    # Create restaurants
    r1 = Restaurant(name="Mama Mia Pizzeria", address="123 Main St")
    r2 = Restaurant(name="Pizza Planet", address="456 Galaxy Blvd")
    r3 = Restaurant(name="Kiki's Pizza", address="789 Witch St")

    db.session.add_all([pizza1, pizza2, pizza3, r1, r2, r3])
    db.session.commit()

    # Create restaurant pizzas
    rp1 = RestaurantPizza(price=10, pizza_id=pizza1.id, restaurant_id=r1.id)
    rp2 = RestaurantPizza(price=12, pizza_id=pizza2.id, restaurant_id=r1.id)
    rp3 = RestaurantPizza(price=8, pizza_id=pizza3.id, restaurant_id=r2.id)
    rp4 = RestaurantPizza(price=9, pizza_id=pizza1.id, restaurant_id=r3.id)

    db.session.add_all([rp1, rp2, rp3, rp4])
    db.session.commit()

    print("✅ Seeding complete!")

from tkinter import OFF
from flask import Flask, request
from flask_restful import reqparse, abort, Api, Resource

app = Flask(__name__)
api = Api(app)

OFFERS = [
    {'offer1': {'requierements': 'Faire un truc', 'cost': 10000, 'time': 32, 'quantity': 12, 'propositions': [
        {'requierements': 'Faire un truc', 'cost': 12000, 'time': 32, 'quantity': 12, 'fabricant': 'ikea', 'valid': False, 'message': ""},
        {'requierements': 'Faire un autre truc', 'cost': 11000, 'time': 32, 'quantity': 12, 'fabricant': 'ikea', 'valid': False, 'message': ""}
    ]}},
    {'offer2': {'requierements': 'Faire des trucs de fou', 'cost': 10000, 'time': 32, 'quantity': 12, 'propositions': []}}
]

def get_next_offer():
    res = 1
    for el in OFFERS:
        print(f"key: {el.keys()}")
        key = int(list(el.keys())[0].strip('offer'))
        if key > res:
            res = key
    return res + 1



def abort_if_todo_doesnt_exist(offer_id):
    for el in OFFERS:
        if offer_id == list(el.keys())[0]:
            return
    abort(404, message="Offer {} doesn't exist".format(offer_id))

parser = reqparse.RequestParser()
parser.add_argument('requierements')
parser.add_argument('cost')
parser.add_argument('time')
parser.add_argument('quantity')


# Todo
# shows a single todo item and lets you delete a todo item
class Offer(Resource):
    def get(self, offer_id):
        abort_if_todo_doesnt_exist(offer_id)
        for offer in OFFERS:
            if(offer_id == list(offer)[0]):
                return offer

    def delete(self, offer_id):
        abort_if_todo_doesnt_exist(offer_id)
        del OFFERS[offer_id]
        return '', 204

    def put(self, offer_id):
        args = parser.parse_args()
        print(f"args : {args}")
        offer = {'fabricant': args['fabricant']}
        OFFERS.append(offer)
        return offer, 201


# TodoList
# shows a list of all todos, and lets you POST to add new tasks
class Offers(Resource):
    def get(self):
        return OFFERS

    def put(self):
        args = parser.parse_args()
        print(f"args: {args}")
        offer_id = 'offer%i' % get_next_offer()
        OFFERS.append({offer_id: {'requierements': args['requierements'], 'cost': args['cost'], 'time': args['time'], 'quantity': args['quantity'], 'propositions': []}})
        return OFFERS[len(OFFERS)-1], 201

##
## Actually setup the Api resource routing here
##
api.add_resource(Offers, '/offers')
api.add_resource(Offer, '/offers/<offer_id>')


if __name__ == '__main__':
    app.run(debug=True)
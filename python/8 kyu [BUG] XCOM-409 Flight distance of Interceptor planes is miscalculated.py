# speed of aircrafts is given in *knots*
# travelTime is in *minutes*
# travel distance should be returned in *kilometers*

def travel_distance(avg_speed, travel_time):
    KM_PER_KNOT = 1.852
    travel_hours = travel_time / 60
    speed_kmh = avg_speed * KM_PER_KNOT
    travel_kms = speed_kmh * travel_hours
    
    return travel_kms
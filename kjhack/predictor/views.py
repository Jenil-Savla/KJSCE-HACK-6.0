from django.http import JsonResponse
from rest_framework.views import APIView
import pickle
import cv2
import tensorflow as tf
import numpy

class call_model(APIView):
    def get(self,request):
        if request.method == 'GET':
            model=tf.keras.models.load_model(r"C:\Users\ryuus\Desktop\New folder\KJSCE-HACK-6.0\kjhack\predictor\model\network.h5")
            path = r'C:\Users\ryuus\Downloads\Cyclone_Wildfire_Flood_Earthquake_Database\Cyclone\0.jpg'
            img = cv2.imread(path)
            img = cv2.resize(img,(224,224))
            def prepare(filepath):
                IMG_SIZE = 224
                img_array = cv2.imread(filepath)
                new_array = cv2.resize(img_array, (IMG_SIZE, IMG_SIZE))
                return new_array.reshape(-1, IMG_SIZE, IMG_SIZE, 3)
            score = model.predict(prepare(path))
            score = score*100
            arr = ['cyclone','earthquake','flood','wildfire']
            max_i,max_s = -1,-1
            score_list = score.tolist()
            for i in range(4):
                if score_list[0][i] > max_s:
                    max_s=score_list[0][i]
                    max_i=i
            dict = {'Disaster': arr[max_i], 'Chances':max_s}
            return JsonResponse(dict, safe = False)
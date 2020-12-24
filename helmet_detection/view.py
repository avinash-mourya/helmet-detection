from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from research.obj import Detector
from django.http import HttpResponse
from encode_decode.img_enc_dec import decodeImage
import cv2 as cv
detector = Detector()
filename = "input.jpg"
file_n = 'research/ssd_mobilenet_v1_coco_2017_11_17/frozen_inference_graph.pb'
detector.load_graph(file_n)
def home(request):
    return render(request,"index.html")

@csrf_exempt
def detection(request):
    if request.is_ajax():
        image = request.POST["imgData"]
        decodeImage(image,filename)
        img = cv.imread(filename)
        result = detector.detect(img)
        # print(result)
        return HttpResponse(result,content_type="image/jpeg")







        

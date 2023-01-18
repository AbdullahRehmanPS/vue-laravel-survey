<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSurveyRequest;
use App\Http\Requests\UpdateSurveyRequest;

use App\Http\Resources\SurveyResource;
use App\Models\Survey;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $user = $request->user();
         return SurveyResource::collection(Survey::where('user_id', $user->id)->paginate(6));
//        return SurveyResource::collection(Survey::where('user_id', $user->id)->orderBy('created_at', 'DESC')->paginate(10));
    }

    /**
     * @param StoreSurveyRequest $request
     * @return SurveyResource
     */
    public function store(StoreSurveyRequest $request)
    {
        $result = Survey::create($request->validated());
//        $abc=0;
        return new SurveyResource($result);
    }

    /**
     * @param Survey $survey
     * @param Request $request
     * @return SurveyResource
     */
    public function show(Survey $survey, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $survey->user_id) {
            abort(403, 'Unauthorized Action!');
        }
        return new SurveyResource($survey);
    }

    /**
     * @param UpdateSurveyRequest $request
     * @param Survey $survey
     * @return SurveyResource
     */
    public function update(UpdateSurveyRequest $request, Survey $survey)
    {
        $result = $request->validated();
        $survey->update($result);
        return new SurveyResource($survey);
    }

    /**
     * @param Survey $survey
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function destroy(Survey $survey,Request $request)
    {
        $user = $request->user();
        if ($user->id !== $survey->user_id) {
            abort(403, 'Unauthorized Action!');
        }
        $survey->delete();
        return response('', 204);
    }
}

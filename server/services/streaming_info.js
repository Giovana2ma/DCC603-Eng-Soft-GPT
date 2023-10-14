function streaming_platforms(streamingInfo) {
    if(streamingInfo.length == 0){
        info = {
            'platform': [],
            'links': [],
        }
        return info;
    }else{
        let streamingPlatforms = [];
        let streamingLinks = [];
        for (var i = 0; i < streamingInfo.length; i++){
            if (streamingInfo[i].streamingType == "subscription"){
                const platform = streamingInfo[i].service;
                if (!streamingPlatforms.includes(platform)) {
                    streamingPlatforms.push(platform);
                    streamingLinks.push(streamingInfo[i].link);
                }
            }
        }
        info = {
            'platform': streamingPlatforms,
            'links': streamingLinks,
        }
        return info;
    }
    
}

module.exports = streaming_platforms; 

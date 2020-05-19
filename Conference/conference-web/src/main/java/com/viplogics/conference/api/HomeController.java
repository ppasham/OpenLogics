package com.viplogics.conference.api;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/")
public class HomeController {
	@Value("${app.version}")
	private String appVersion;
	@Value("ConferenceWebServices")
	private String appName;
	
	@GetMapping
	public Map about(){
		Map map = new HashMap<String, String>();
		map.put("app-version", appVersion);
		map.put("app-name",appName);
		
		/*AboutApi appInfo = AboutApi.Info();
		map.put(Info);*/
		
		return map;
	}

}

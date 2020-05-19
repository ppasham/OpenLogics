package com.viplogics.conference.api.metainf;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;

@Getter @NoArgsConstructor
public class AboutApi {
	@Value("")
	protected String apiVersion;
	@Value("")
	protected String appName;
	
	public static AboutApi Info(){
		return  new AboutApi();
	}
}

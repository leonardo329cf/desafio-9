package com.devsuperior.movieflix.configs.unem;

public enum RoleType {

	VISITOR("VISITOR"),
	MEMBER("MEMBER");
	
	private String name;

	private RoleType(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}
}

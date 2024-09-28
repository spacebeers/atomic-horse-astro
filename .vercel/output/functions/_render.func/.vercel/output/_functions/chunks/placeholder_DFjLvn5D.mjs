const placeholder = new Proxy({"src":"/_astro/placeholder.BLiQAKbJ.png","width":523,"height":268,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/usr/local/var/www/magenta-magnitude/src/assets/placeholder.png";
							}
							
							return target[name];
						}
					});

export { placeholder as default };

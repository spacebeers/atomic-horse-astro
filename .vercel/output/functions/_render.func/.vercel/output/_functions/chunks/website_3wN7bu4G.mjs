const website = new Proxy({"src":"/_astro/website.Dqs202FZ.png","width":2742,"height":1846,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/usr/local/var/www/magenta-magnitude/src/assets/case-studies/website.png";
							}
							
							return target[name];
						}
					});

export { website as default };

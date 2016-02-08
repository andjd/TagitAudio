# -*- encoding: utf-8 -*-
# stub: its-it 1.2.0 ruby lib

Gem::Specification.new do |s|
  s.name = "its-it"
  s.version = "1.2.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 1.3.7") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Ronen Barzel"]
  s.date = "2011-04-26"
  s.description = "\nThis gem defines the Kernel method \"it\" that queue and defer method calls.\nThis extends the Symbol#to_proc idiom to support chaining multiple methods.\nFor example, items.collect(&it.to_s.capitalize).  This also allows\nconditionals in case statements, such as: case ... when it > 3 then [etc.].\nThe method is also aliased as \"its\", for methods that describe possessives\nrather than actions, such as items.collect(&its.name.capitalize)\n\n[This gem is an extension of Jay Philips' \"methodphitamine\" gem, updated\nfor ruby 1.9 and gemspec compatibility and adding the case statement functionality.]\n"
  s.email = "ronen@barzel.org"
  s.extra_rdoc_files = ["LICENSE.txt"]
  s.files = ["LICENSE.txt"]
  s.homepage = "http://github.com/ronen/its-it"
  s.rubygems_version = "2.4.6"
  s.summary = "Defines its() and it() method-chain proxies."

  s.installed_by_version = "2.4.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rake>, [">= 0"])
      s.add_development_dependency(%q<rdoc>, [">= 0"])
      s.add_development_dependency(%q<rspec>, ["~> 3.0"])
      s.add_development_dependency(%q<bundler>, [">= 0"])
      s.add_development_dependency(%q<simplecov>, [">= 0"])
      s.add_development_dependency(%q<simplecov-gem-adapter>, [">= 0"])
    else
      s.add_dependency(%q<rake>, [">= 0"])
      s.add_dependency(%q<rdoc>, [">= 0"])
      s.add_dependency(%q<rspec>, ["~> 3.0"])
      s.add_dependency(%q<bundler>, [">= 0"])
      s.add_dependency(%q<simplecov>, [">= 0"])
      s.add_dependency(%q<simplecov-gem-adapter>, [">= 0"])
    end
  else
    s.add_dependency(%q<rake>, [">= 0"])
    s.add_dependency(%q<rdoc>, [">= 0"])
    s.add_dependency(%q<rspec>, ["~> 3.0"])
    s.add_dependency(%q<bundler>, [">= 0"])
    s.add_dependency(%q<simplecov>, [">= 0"])
    s.add_dependency(%q<simplecov-gem-adapter>, [">= 0"])
  end
end

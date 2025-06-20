"use strict";var f=function(v,e){return function(){return e||v((e={exports:{}}).exports,e),e.exports}};var V=f(function(Z,p){"use strict";var y=require("@stdlib/math-base-assert-is-nan"),P=require("@stdlib/stats-base-dists-normal-quantile").factory,_=require("@stdlib/stats-base-dists-normal-cdf").factory,b=require("@stdlib/stats-strided-dmean").ndarray,w=require("@stdlib/math-base-special-sqrt"),D=require("@stdlib/math-base-special-abs"),K=require("@stdlib/array-float64"),Q=require("@stdlib/constants-float64-pinf"),S=require("@stdlib/constants-float64-ninf"),j=_(0,1),x=P(0,1),i=new K(2);function W(v,e,a,s,d,u,l,N,r){var c,n,F,t,q;return v<=0||y(a)||y(s)||y(d)||d<=0||a<0||a>1?(i[0]=NaN,i[1]=NaN,r.rejected=!1,r.alternative=e,r.alpha=NaN,r.pValue=NaN,r.statistic=NaN,r.ci=i,r.nullValue=NaN,r.sd=NaN,r):(n=d/w(v),F=b(v,u,l,N),t=(F-s)/n,e==="less"?(c=j(t),q=x(1-a),i[0]=S,i[1]=s+(t+q)*n):e==="greater"?(c=1-j(t),q=x(1-a),i[0]=s+(t-q)*n,i[1]=Q):(c=2*j(-D(t)),q=x(1-a/2),i[0]=s+(t-q)*n,i[1]=s+(t+q)*n),r.rejected=c<=a,r.alternative=e,r.alpha=a,r.pValue=c,r.statistic=t,r.ci=i,r.nullValue=s,r.sd=n,r)}p.exports=W});var A=f(function($,R){"use strict";var k=require("@stdlib/strided-base-stride2offset"),B=V();function G(v,e,a,s,d,u,l,N){return B(v,e,a,s,d,u,l,k(v,l),N)}R.exports=G});var I=f(function(g,E){"use strict";var H=require("@stdlib/utils-define-nonenumerable-read-only-property"),C=A(),J=V();H(C,"ndarray",J);E.exports=C});var L=require("path").join,M=require("@stdlib/utils-try-require"),T=require("@stdlib/assert-is-error"),U=I(),z,O=M(L(__dirname,"./native.js"));T(O)?z=U:z=O;module.exports=z;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map

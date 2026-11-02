"use strict";var y=function(v,i){return function(){try{return i||v((i={exports:{}}).exports,i),i.exports}catch(e){throw i=0,e}}};var z=y(function(g,R){"use strict";var S=require("@stdlib/stats-base-ztest-alternative-resolve-str"),j=require("@stdlib/math-base-assert-is-nan"),_=require("@stdlib/stats-base-dists-normal-quantile").factory,b=require("@stdlib/stats-base-dists-normal-cdf").factory,w=require("@stdlib/stats-strided-dmean").ndarray,D=require("@stdlib/math-base-special-sqrt"),K=require("@stdlib/math-base-special-abs"),Q=require("@stdlib/array-float64"),W=require("@stdlib/constants-float64-pinf"),k=require("@stdlib/constants-float64-ninf"),x=b(0,1),V=_(0,1),a=new Q(2);function B(v,i,e,t,l,N,u,f,r){var d,n,p,s,c,q;return c=S(i),v<=0||j(e)||j(t)||j(l)||l<=0||e<0||e>1?(a[0]=NaN,a[1]=NaN,r.rejected=!1,r.alternative=c,r.alpha=NaN,r.pValue=NaN,r.statistic=NaN,r.ci=a,r.nullValue=NaN,r.sd=NaN,r):(n=l/D(v),p=w(v,N,u,f),s=(p-t)/n,c==="less"?(d=x(s),q=V(1-e),a[0]=k,a[1]=t+(s+q)*n):c==="greater"?(d=1-x(s),q=V(1-e),a[0]=t+(s-q)*n,a[1]=W):(d=2*x(-K(s)),q=V(1-e/2),a[0]=t+(s-q)*n,a[1]=t+(s+q)*n),r.rejected=d<=e,r.alternative=c,r.alpha=e,r.pValue=d,r.statistic=s,r.ci=a,r.nullValue=t,r.sd=n,r)}R.exports=B});var C=y(function(m,A){"use strict";var G=require("@stdlib/strided-base-stride2offset"),H=z();function J(v,i,e,t,l,N,u,f){return H(v,i,e,t,l,N,u,G(v,u),f)}A.exports=J});var O=y(function(o,I){"use strict";var L=require("@stdlib/utils-define-nonenumerable-read-only-property"),E=C(),M=z();L(E,"ndarray",M);I.exports=E});var T=require("path").join,U=require("@stdlib/utils-try-require"),Y=require("@stdlib/assert-is-error"),Z=O(),F,P=U(T(__dirname,"./native.js"));Y(P)?F=Z:F=P;module.exports=F;
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

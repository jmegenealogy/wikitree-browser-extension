import { shouldInitializeFeature, getFeatureOptions } from "../../core/options/options_storage";
import $ from "jquery";

shouldInitializeFeature("helloWorld").then((result) => {
  if (result) {
    const nameElement = $('h1 > [itemprop="name"]');
    const nameText = nameElement.text();
    $(nameElement).text(`Hello, ${nameText}`);
  }
});

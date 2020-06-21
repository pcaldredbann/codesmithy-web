output "zone_id" {
  value = "${aws_route53_zone.this.*.zone_id}"
}

output "website_endpoint" {
  value = "${aws_s3_bucket.base.*.website_endpoint}"
}

output "www_website_endpoint" {
  value = "${aws_s3_bucket.www.*.website_endpoint}"
}

output "website_domain" {
  value = "${aws_s3_bucket.base.*.website_domain}"
}

output "www_website_domain" {
  value = "${aws_s3_bucket.www.*.website_domain}"
}

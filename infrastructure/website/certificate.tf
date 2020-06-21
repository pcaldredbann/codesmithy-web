resource "aws_acm_certificate" "this" {
  count = "${length(var.domain_urls)}"

  domain_name       = "*.${element(var.domain_urls, count.index)}"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "this" {
  count = "${length(var.domain_urls)}"

  name    = "${lookup(aws_acm_certificate.this.*.domain_validation_options[count.index], "resource_record_name")}"
  type    = "${lookup(aws_acm_certificate.this.*.domain_validation_options[count.index], "resource_record_type")}"
  zone_id = "${aws_route53_zone.this.*.zone_id}"
  records = ["${lookup(aws_acm_certificate.this.*.domain_validation_options[count.index], "resource_record_value")}"]
  ttl     = 60
}

resource "aws_acm_certificate_validation" "this" {
  count = "${length(var.domain_urls)}"

  certificate_arn         = "${element(aws_acm_certificate.this.*.arn, count.index)}"
  validation_record_fqdns = ["${element(aws_route53_record.this.*.fqdn, count.index)}"]
}

resource "aws_route53_zone" "this" {
  count = "${length(var.domain_urls)}"

  name    = "${element(var.domain_urls, count.index)}"
  comment = "Hosted zone for domain ${element(var.domain_urls, count.index)}"
}

resource "aws_route53_record" "ns" {
  count = "${length(var.domain_urls)}"

  name    = "${var.domain_urls[count.index]}"
  zone_id = "${element(aws_route53_zone.this.*.zone_id, count.index)}"
  type    = "NS"
  ttl     = 300

  records = [
    "${element(aws_route53_zone.this.*.name_servers.0, count.index)}",
    "${element(aws_route53_zone.this.*.name_servers.1, count.index)}",
    "${element(aws_route53_zone.this.*.name_servers.2, count.index)}",
    "${element(aws_route53_zone.this.*.name_servers.3, count.index)}",
  ]
}

resource "aws_route53_record" "a" {
  count = "${length(var.domain_urls)}"

  name    = "${element(var.domain_urls, count.index)}"
  zone_id = "${element(aws_route53_zone.this.*.zone_id, count.index)}"
  type    = "A"

  alias {
    name                   = "${element(aws_s3_bucket.base.*.website_endpoint, count.index)}"
    zone_id                = "${element(aws_s3_bucket.base.*.hosted_zone_id, count.index)}"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "cname" {
  count = "${length(var.www_domain_urls)}"

  name    = "${element(var.www_domain_urls, count.index)}"
  zone_id = "${element(aws_route53_zone.this.*.zone_id, count.index)}"
  type    = "CNAME"

  alias {
    name                   = "${element(aws_s3_bucket.www.*.website_endpoint, count.index)}"
    zone_id                = "${element(aws_s3_bucket.www.*.hosted_zone_id, count.index)}"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "mx" {
  name    = "${element(var.domain_urls, count.index)}"
  zone_id = "${element(aws_route53_zone.this.*.zone_id, count.index)}"
  type    = "MX"
  records = "${var.mx_records}"
  ttl     = 300
}

resource "aws_route53_record" "txt" {
  count = "${length(var.domain_urls)}"

  name    = "${element(var.domain_urls, count.index)}"
  zone_id = "${element(aws_route53_zone.this.*.zone_id, count.index)}"
  type    = "TXT"
  records = "${var.txt_records}"
  ttl     = 300
}

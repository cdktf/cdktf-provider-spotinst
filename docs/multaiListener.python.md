# `spotinst_multai_listener`

Refer to the Terraform Registory for docs: [`spotinst_multai_listener`](https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener).

# `multaiListener` Submodule <a name="`multaiListener` Submodule" id="@cdktf/provider-spotinst.multaiListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MultaiListener <a name="MultaiListener" id="@cdktf/provider-spotinst.multaiListener.MultaiListener"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener spotinst_multai_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_listener

multaiListener.MultaiListener(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  balancer_id: str,
  port: typing.Union[int, float],
  protocol: str,
  id: str = None,
  tags: typing.Union[IResolvable, typing.List[MultaiListenerTags]] = None,
  tls_config: MultaiListenerTlsConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.balancerId">balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#balancer_id MultaiListener#balancer_id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#port MultaiListener#port}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#protocol MultaiListener#protocol}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#id MultaiListener#id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags">MultaiListenerTags</a>]]</code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.tlsConfig">tls_config</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig">MultaiListenerTlsConfig</a></code> | tls_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `balancer_id`<sup>Required</sup> <a name="balancer_id" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.balancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#balancer_id MultaiListener#balancer_id}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#port MultaiListener#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#protocol MultaiListener#protocol}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#id MultaiListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags">MultaiListenerTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#tags MultaiListener#tags}

---

##### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.tlsConfig"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig">MultaiListenerTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#tls_config MultaiListener#tls_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.putTlsConfig">put_tls_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.resetTlsConfig">reset_tls_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[MultaiListenerTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags">MultaiListenerTags</a>]]

---

##### `put_tls_config` <a name="put_tls_config" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.putTlsConfig"></a>

```python
def put_tls_config(
  certificate_ids: typing.List[str],
  cipher_suites: typing.List[str],
  max_version: str,
  min_version: str,
  prefer_server_cipher_suites: typing.Union[bool, IResolvable],
  session_tickets_disabled: typing.Union[bool, IResolvable]
) -> None
```

###### `certificate_ids`<sup>Required</sup> <a name="certificate_ids" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.putTlsConfig.parameter.certificateIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#certificate_ids MultaiListener#certificate_ids}.

---

###### `cipher_suites`<sup>Required</sup> <a name="cipher_suites" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.putTlsConfig.parameter.cipherSuites"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#cipher_suites MultaiListener#cipher_suites}.

---

###### `max_version`<sup>Required</sup> <a name="max_version" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.putTlsConfig.parameter.maxVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#max_version MultaiListener#max_version}.

---

###### `min_version`<sup>Required</sup> <a name="min_version" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.putTlsConfig.parameter.minVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#min_version MultaiListener#min_version}.

---

###### `prefer_server_cipher_suites`<sup>Required</sup> <a name="prefer_server_cipher_suites" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.putTlsConfig.parameter.preferServerCipherSuites"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#prefer_server_cipher_suites MultaiListener#prefer_server_cipher_suites}.

---

###### `session_tickets_disabled`<sup>Required</sup> <a name="session_tickets_disabled" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.putTlsConfig.parameter.sessionTicketsDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#session_tickets_disabled MultaiListener#session_tickets_disabled}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tls_config` <a name="reset_tls_config" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.resetTlsConfig"></a>

```python
def reset_tls_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_listener

multaiListener.MultaiListener.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_listener

multaiListener.MultaiListener.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_listener

multaiListener.MultaiListener.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList">MultaiListenerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference">MultaiListenerTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.balancerIdInput">balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags">MultaiListenerTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.tlsConfigInput">tls_config_input</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig">MultaiListenerTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.balancerId">balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.tags"></a>

```python
tags: MultaiListenerTagsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList">MultaiListenerTagsList</a>

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.tlsConfig"></a>

```python
tls_config: MultaiListenerTlsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference">MultaiListenerTlsConfigOutputReference</a>

---

##### `balancer_id_input`<sup>Optional</sup> <a name="balancer_id_input" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.balancerIdInput"></a>

```python
balancer_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[MultaiListenerTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags">MultaiListenerTags</a>]]

---

##### `tls_config_input`<sup>Optional</sup> <a name="tls_config_input" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.tlsConfigInput"></a>

```python
tls_config_input: MultaiListenerTlsConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig">MultaiListenerTlsConfig</a>

---

##### `balancer_id`<sup>Required</sup> <a name="balancer_id" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.balancerId"></a>

```python
balancer_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MultaiListenerConfig <a name="MultaiListenerConfig" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_listener

multaiListener.MultaiListenerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  balancer_id: str,
  port: typing.Union[int, float],
  protocol: str,
  id: str = None,
  tags: typing.Union[IResolvable, typing.List[MultaiListenerTags]] = None,
  tls_config: MultaiListenerTlsConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.balancerId">balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#balancer_id MultaiListener#balancer_id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#port MultaiListener#port}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#protocol MultaiListener#protocol}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#id MultaiListener#id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags">MultaiListenerTags</a>]]</code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig">MultaiListenerTlsConfig</a></code> | tls_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `balancer_id`<sup>Required</sup> <a name="balancer_id" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.balancerId"></a>

```python
balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#balancer_id MultaiListener#balancer_id}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#port MultaiListener#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#protocol MultaiListener#protocol}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#id MultaiListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[MultaiListenerTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags">MultaiListenerTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#tags MultaiListener#tags}

---

##### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.tlsConfig"></a>

```python
tls_config: MultaiListenerTlsConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig">MultaiListenerTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#tls_config MultaiListener#tls_config}

---

### MultaiListenerTags <a name="MultaiListenerTags" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTags.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_listener

multaiListener.MultaiListenerTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#key MultaiListener#key}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#value MultaiListener#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#key MultaiListener#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#value MultaiListener#value}.

---

### MultaiListenerTlsConfig <a name="MultaiListenerTlsConfig" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_listener

multaiListener.MultaiListenerTlsConfig(
  certificate_ids: typing.List[str],
  cipher_suites: typing.List[str],
  max_version: str,
  min_version: str,
  prefer_server_cipher_suites: typing.Union[bool, IResolvable],
  session_tickets_disabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.certificateIds">certificate_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#certificate_ids MultaiListener#certificate_ids}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.cipherSuites">cipher_suites</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#cipher_suites MultaiListener#cipher_suites}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.maxVersion">max_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#max_version MultaiListener#max_version}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.minVersion">min_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#min_version MultaiListener#min_version}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.preferServerCipherSuites">prefer_server_cipher_suites</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#prefer_server_cipher_suites MultaiListener#prefer_server_cipher_suites}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.sessionTicketsDisabled">session_tickets_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#session_tickets_disabled MultaiListener#session_tickets_disabled}. |

---

##### `certificate_ids`<sup>Required</sup> <a name="certificate_ids" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.certificateIds"></a>

```python
certificate_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#certificate_ids MultaiListener#certificate_ids}.

---

##### `cipher_suites`<sup>Required</sup> <a name="cipher_suites" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.cipherSuites"></a>

```python
cipher_suites: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#cipher_suites MultaiListener#cipher_suites}.

---

##### `max_version`<sup>Required</sup> <a name="max_version" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.maxVersion"></a>

```python
max_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#max_version MultaiListener#max_version}.

---

##### `min_version`<sup>Required</sup> <a name="min_version" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.minVersion"></a>

```python
min_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#min_version MultaiListener#min_version}.

---

##### `prefer_server_cipher_suites`<sup>Required</sup> <a name="prefer_server_cipher_suites" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.preferServerCipherSuites"></a>

```python
prefer_server_cipher_suites: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#prefer_server_cipher_suites MultaiListener#prefer_server_cipher_suites}.

---

##### `session_tickets_disabled`<sup>Required</sup> <a name="session_tickets_disabled" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.sessionTicketsDisabled"></a>

```python
session_tickets_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/multai_listener#session_tickets_disabled MultaiListener#session_tickets_disabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### MultaiListenerTagsList <a name="MultaiListenerTagsList" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_listener

multaiListener.MultaiListenerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MultaiListenerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags">MultaiListenerTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MultaiListenerTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags">MultaiListenerTags</a>]]

---


### MultaiListenerTagsOutputReference <a name="MultaiListenerTagsOutputReference" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_listener

multaiListener.MultaiListenerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags">MultaiListenerTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MultaiListenerTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags">MultaiListenerTags</a>]

---


### MultaiListenerTlsConfigOutputReference <a name="MultaiListenerTlsConfigOutputReference" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import multai_listener

multaiListener.MultaiListenerTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.certificateIdsInput">certificate_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.cipherSuitesInput">cipher_suites_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.maxVersionInput">max_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.minVersionInput">min_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.preferServerCipherSuitesInput">prefer_server_cipher_suites_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.sessionTicketsDisabledInput">session_tickets_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.certificateIds">certificate_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.cipherSuites">cipher_suites</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.maxVersion">max_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.minVersion">min_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.preferServerCipherSuites">prefer_server_cipher_suites</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.sessionTicketsDisabled">session_tickets_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig">MultaiListenerTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_ids_input`<sup>Optional</sup> <a name="certificate_ids_input" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.certificateIdsInput"></a>

```python
certificate_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cipher_suites_input`<sup>Optional</sup> <a name="cipher_suites_input" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.cipherSuitesInput"></a>

```python
cipher_suites_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_version_input`<sup>Optional</sup> <a name="max_version_input" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.maxVersionInput"></a>

```python
max_version_input: str
```

- *Type:* str

---

##### `min_version_input`<sup>Optional</sup> <a name="min_version_input" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.minVersionInput"></a>

```python
min_version_input: str
```

- *Type:* str

---

##### `prefer_server_cipher_suites_input`<sup>Optional</sup> <a name="prefer_server_cipher_suites_input" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.preferServerCipherSuitesInput"></a>

```python
prefer_server_cipher_suites_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `session_tickets_disabled_input`<sup>Optional</sup> <a name="session_tickets_disabled_input" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.sessionTicketsDisabledInput"></a>

```python
session_tickets_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `certificate_ids`<sup>Required</sup> <a name="certificate_ids" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.certificateIds"></a>

```python
certificate_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cipher_suites`<sup>Required</sup> <a name="cipher_suites" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.cipherSuites"></a>

```python
cipher_suites: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_version`<sup>Required</sup> <a name="max_version" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.maxVersion"></a>

```python
max_version: str
```

- *Type:* str

---

##### `min_version`<sup>Required</sup> <a name="min_version" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.minVersion"></a>

```python
min_version: str
```

- *Type:* str

---

##### `prefer_server_cipher_suites`<sup>Required</sup> <a name="prefer_server_cipher_suites" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.preferServerCipherSuites"></a>

```python
prefer_server_cipher_suites: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `session_tickets_disabled`<sup>Required</sup> <a name="session_tickets_disabled" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.sessionTicketsDisabled"></a>

```python
session_tickets_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: MultaiListenerTlsConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig">MultaiListenerTlsConfig</a>

---




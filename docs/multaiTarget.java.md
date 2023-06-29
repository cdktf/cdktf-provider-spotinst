# `spotinst_multai_target`

Refer to the Terraform Registory for docs: [`spotinst_multai_target`](https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target).

# `multaiTarget` Submodule <a name="`multaiTarget` Submodule" id="@cdktf/provider-spotinst.multaiTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MultaiTarget <a name="MultaiTarget" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target spotinst_multai_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.multai_target.MultaiTarget;

MultaiTarget.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .balancerId(java.lang.String)
    .host(java.lang.String)
    .targetSetId(java.lang.String)
    .weight(java.lang.Number)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .port(java.lang.Number)
//  .tags(IResolvable)
//  .tags(java.util.List<MultaiTargetTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.balancerId">balancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#balancer_id MultaiTarget#balancer_id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#host MultaiTarget#host}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.targetSetId">targetSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#target_set_id MultaiTarget#target_set_id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#weight MultaiTarget#weight}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#id MultaiTarget#id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#name MultaiTarget#name}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#port MultaiTarget#port}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTags">MultaiTargetTags</a>></code> | tags block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `balancerId`<sup>Required</sup> <a name="balancerId" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.balancerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#balancer_id MultaiTarget#balancer_id}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.host"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#host MultaiTarget#host}.

---

##### `targetSetId`<sup>Required</sup> <a name="targetSetId" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.targetSetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#target_set_id MultaiTarget#target_set_id}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.weight"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#weight MultaiTarget#weight}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#id MultaiTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#name MultaiTarget#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#port MultaiTarget#port}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.Initializer.parameter.tags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTags">MultaiTargetTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#tags MultaiTarget#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTags` <a name="putTags" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<MultaiTargetTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTags">MultaiTargetTags</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.resetName"></a>

```java
public void resetName()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.resetPort"></a>

```java
public void resetPort()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.multai_target.MultaiTarget;

MultaiTarget.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.multai_target.MultaiTarget;

MultaiTarget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.multai_target.MultaiTarget;

MultaiTarget.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList">MultaiTargetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.balancerIdInput">balancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTags">MultaiTargetTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.targetSetIdInput">targetSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.balancerId">balancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.targetSetId">targetSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.tags"></a>

```java
public MultaiTargetTagsList getTags();
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList">MultaiTargetTagsList</a>

---

##### `balancerIdInput`<sup>Optional</sup> <a name="balancerIdInput" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.balancerIdInput"></a>

```java
public java.lang.String getBalancerIdInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTags">MultaiTargetTags</a>>

---

##### `targetSetIdInput`<sup>Optional</sup> <a name="targetSetIdInput" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.targetSetIdInput"></a>

```java
public java.lang.String getTargetSetIdInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `balancerId`<sup>Required</sup> <a name="balancerId" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.balancerId"></a>

```java
public java.lang.String getBalancerId();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `targetSetId`<sup>Required</sup> <a name="targetSetId" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.targetSetId"></a>

```java
public java.lang.String getTargetSetId();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.multaiTarget.MultaiTarget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MultaiTargetConfig <a name="MultaiTargetConfig" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.multai_target.MultaiTargetConfig;

MultaiTargetConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .balancerId(java.lang.String)
    .host(java.lang.String)
    .targetSetId(java.lang.String)
    .weight(java.lang.Number)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .port(java.lang.Number)
//  .tags(IResolvable)
//  .tags(java.util.List<MultaiTargetTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.balancerId">balancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#balancer_id MultaiTarget#balancer_id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#host MultaiTarget#host}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.targetSetId">targetSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#target_set_id MultaiTarget#target_set_id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#weight MultaiTarget#weight}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#id MultaiTarget#id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#name MultaiTarget#name}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#port MultaiTarget#port}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTags">MultaiTargetTags</a>></code> | tags block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `balancerId`<sup>Required</sup> <a name="balancerId" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.balancerId"></a>

```java
public java.lang.String getBalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#balancer_id MultaiTarget#balancer_id}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#host MultaiTarget#host}.

---

##### `targetSetId`<sup>Required</sup> <a name="targetSetId" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.targetSetId"></a>

```java
public java.lang.String getTargetSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#target_set_id MultaiTarget#target_set_id}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#weight MultaiTarget#weight}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#id MultaiTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#name MultaiTarget#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#port MultaiTarget#port}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetConfig.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTags">MultaiTargetTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#tags MultaiTarget#tags}

---

### MultaiTargetTags <a name="MultaiTargetTags" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.multai_target.MultaiTargetTags;

MultaiTargetTags.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#key MultaiTarget#key}. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#value MultaiTarget#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#key MultaiTarget#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/multai_target#value MultaiTarget#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MultaiTargetTagsList <a name="MultaiTargetTagsList" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.multai_target.MultaiTargetTagsList;

new MultaiTargetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.get"></a>

```java
public MultaiTargetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTags">MultaiTargetTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTags">MultaiTargetTags</a>>

---


### MultaiTargetTagsOutputReference <a name="MultaiTargetTagsOutputReference" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.multai_target.MultaiTargetTagsOutputReference;

new MultaiTargetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTags">MultaiTargetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.multaiTarget.MultaiTargetTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.multaiTarget.MultaiTargetTags">MultaiTargetTags</a>

---



